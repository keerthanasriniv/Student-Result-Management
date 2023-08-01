package pg;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class Database {
	static {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
    private static final String DB_URL = "jdbc:mysql://localhost:3306/mini1";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "Sk@520sk520";


    public Connection getConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
    }
    public void addPayingGuest(PayingGuest pg) {
    	 String query = "INSERT INTO pg (pg_name, gender) VALUES (?, ?)";

         try (Connection connection = getConnection();
              PreparedStatement statement = connection.prepareStatement(query)) {
             statement.setString(1, pg.getPgName());
             statement.setString(2, pg.getPgType());

             statement.executeUpdate();
         } catch (SQLException e) {
             e.printStackTrace();
         }
    }
         
    
    public void deletePayingGuest(int pgId) {
    	 String query = "DELETE FROM pg WHERE pg_id = ?";

         try (Connection connection = getConnection();
              PreparedStatement statement = connection.prepareStatement(query)) {
             statement.setInt(1, pgId);

             int rowsAffected = statement.executeUpdate();
             if (rowsAffected > 0) {
                 System.out.println("PG with ID " + pgId + " deleted successfully!");
             } else {
                 System.out.println("No PG found with ID " + pgId + ". Deletion failed!");
             }
         } catch (SQLException e) {
             e.printStackTrace();
         }
    
    }

    public List<PayingGuest> searchPGByGender(String gender) {
        String query = "SELECT * FROM pg WHERE gender = ?";
        List<PayingGuest> pgList = new ArrayList<>();

        try (Connection connection = getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, gender);

            try (ResultSet resultSet = statement.executeQuery()) {
                while (resultSet.next()) {
                    int pgId = resultSet.getInt("pg_id");
                    String pgName = resultSet.getString("pg_name");
                    String pgType = resultSet.getString("gender");

                    PayingGuest pg = new PayingGuest(pgId, pgName, pgType);
                    pgList.add(pg);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return pgList;
    }


    public boolean registerUser(User user) {
        String query = "INSERT INTO users (username, password) VALUES (?, ?)";

        try (Connection connection = getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, user.getUsername());
            statement.setString(2, user.getPassword());

            statement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    public boolean loginUser(String username, String password) {
        String query = "SELECT * FROM users WHERE username = ? AND password = ?";
        boolean loginSuccess = false;

        try (Connection connection = getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, username);
            statement.setString(2, password);

            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    loginSuccess = true;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return loginSuccess;
    }
    public void closeConnection(Connection connection) {
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}












//package payingguest;
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.util.ArrayList;
//import java.util.List;
//
//public class DatabaseHandler {
//    private static final String DB_URL = "jdbc:mysql://localhost:3306/mini1";
//    private static final String DB_USER = "root";
//    private static final String DB_PASSWORD = "Sk@520sk520";
//
//    public Connection getConnection() throws SQLException {
//        return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
//    }
//
//    // Method to register a new user
//    public void registerUser(User user) {
//        try (Connection conn = getConnection();
//             PreparedStatement stmt = conn.prepareStatement(
//                     "INSERT INTO users (username, password) VALUES (?, ?)")) {
//
//            stmt.setString(1, user.getUsername());
//            stmt.setString(2, user.getPassword());
//
//            stmt.executeUpdate();
//        } catch (SQLException e) {
//            e.printStackTrace();
//            // Handle exceptions appropriately
//        }
//    }
//
//    // Method to validate user login
//    public boolean loginUser(String username, String password) {
//        try (Connection conn = getConnection();
//             PreparedStatement stmt = conn.prepareStatement(
//                     "SELECT COUNT(*) FROM users WHERE username = ? AND password = ?")) {
//
//            stmt.setString(1, username);
//            stmt.setString(2, password);
//
//            ResultSet rs = stmt.executeQuery();
//            if (rs.next()) {
//                int count = rs.getInt(1);
//                return count == 1;
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//            // Handle exceptions appropriately
//        }
//        return false;
//    }
//    public List<PayingGuest> searchPGByGender(String gender) {
//        List<PayingGuest> pgList = new ArrayList<>();
//
//        try (Connection conn = getConnection();
//             PreparedStatement stmt = conn.prepareStatement(
//                     "SELECT * FROM pg WHERE gender = ?")) {
//
//            stmt.setString(1, gender);
//            ResultSet rs = stmt.executeQuery();
//
//            while (rs.next()) {
//                int pgId = rs.getInt("pg_id");
//                String pgName = rs.getString("pg_name");
//                String pgType = rs.getString("gender");
//
//                PayingGuest pg = new PayingGuest(pgId, pgName, pgType);
//                pgList.add(pg);
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//            // Handle exceptions appropriately
//        }
//
//        return pgList;
//    }
//    public void deletePayingGuest(int pgId) {
//        try (Connection conn = getConnection();
//             PreparedStatement stmt = conn.prepareStatement(
//                     "DELETE FROM pg WHERE pg_id = ?")) {
//
//            stmt.setInt(1, pgId);
//
//            int rowsAffected = stmt.executeUpdate();
//            if (rowsAffected > 0) {
//                System.out.println("PG with ID " + pgId + " deleted successfully!");
//            } else {
//                System.out.println("PG with ID " + pgId + " not found or couldn't be deleted.");
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//            // Handle exceptions appropriately
//        }
//    }
//    public void addPayingGuest(PayingGuest pg) {
//        try (Connection conn = getConnection();
//             PreparedStatement stmt = conn.prepareStatement(
//                     "INSERT INTO pg (pg_name, gender) VALUES (?, ?)")) {
//
//            stmt.setString(1, pg.getPgName());
//            stmt.setString(2, pg.getPgType());
//
//            int rowsAffected = stmt.executeUpdate();
//            if (rowsAffected > 0) {
//                System.out.println("PG details added successfully!");
//            } else {
//                System.out.println("Failed to add PG details.");
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//            // Handle exceptions appropriately
//        }
//    }
//
//    // Method to add PG details
//    // ... (previously implemented code for addPayingGuest())
//
//    // Method to delete PG details by PG ID
//    // ... (previously implemented code for deletePayingGuest())
//
//    // Method to search PG based on gender
//    // ... (previously implemented code for searchPGByGender())
//}
