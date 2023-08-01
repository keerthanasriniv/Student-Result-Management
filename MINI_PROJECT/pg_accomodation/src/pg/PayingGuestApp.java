package pg;
import java.util.List;
import java.util.Scanner;

abstract class UserType {
    protected static Database dbHandler = new Database();

    abstract void handleOperations();
    abstract void performUserRegistration();
}

class AdminUser extends UserType {
    private static Scanner scanner = new Scanner(System.in);

    @Override
    void handleOperations() {
        boolean exit = false;

        while (!exit) {
            System.out.println("\nAdmin Menu:");
            System.out.println("1. Add PG");
            System.out.println("2. Delete PG");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    performAddPG();
                    break;
                case 2:
                    performDeletePG();
                    break;
                case 3:
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
                    break;
            }
        }

        System.out.println("Goodbye!");
    }

    private void performAddPG() {
        System.out.println("Enter PG Name: ");
        String pgName = scanner.nextLine();
        System.out.println("Enter Gender (Male/Female): ");
        String gender = scanner.nextLine();

        PayingGuest pg = new PayingGuest(0, pgName, gender);
        dbHandler.addPayingGuest(pg);
        System.out.println("PG details added successfully!");
    }

    private void performDeletePG() {
        System.out.println("Enter PG ID to delete: ");
        int pgId = scanner.nextInt();
        scanner.nextLine();

        dbHandler.deletePayingGuest(pgId);
        System.out.println("PG with ID " + pgId + " deleted successfully!");
    }

	@Override
	void performUserRegistration() {
		// TODO Auto-generated method stub
		
	}
}

class RegularUser extends UserType {
    private static Scanner scanner = new Scanner(System.in);
    @Override
    void handleOperations() {
        boolean exit = false;

        while (!exit) {
            System.out.println("\nUser Menu:");
            System.out.println("1. Search PG");
            System.out.println("2. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    performSearchPG();
                    break;
                case 2:
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
                    break;
            }
        }

        System.out.println("Goodbye!");
    }
    
	void performUserRegistration() {
    	System.out.println("Already registered?(yes or no)");
    	String input=scanner.nextLine();
    	if(input.equals("yes"))
    	{
    		performUserLogin();
    		
    	}
    	System.out.println("New Users Register here");
        System.out.println("Enter username: ");
        String username = scanner.nextLine();
        System.out.println("Enter password: ");
        String password = scanner.nextLine();

        User user = new User(username, password);
        if (dbHandler.registerUser(user)) {
            System.out.println("Registration successful!");
            performUserLogin();
        }
         else {
            System.out.println("Registration failed. Please try again.");
        }
    }

  void performUserLogin() {
    	System.out.println("Login");
        System.out.println("Enter username: ");
        String username = scanner.nextLine();
        System.out.println("Enter password: ");
        String password = scanner.nextLine();

        if (dbHandler.loginUser(username, password)) {
            System.out.println("Login successful!");
            handleOperations();
        } else {
            System.out.println("Invalid username or password. Please try again.");
        }
    }   
    

    

    private void performSearchPG() {
        System.out.println("Enter gender (Male/Female): ");
        String gender = scanner.nextLine();

        List<PayingGuest> pgList = dbHandler.searchPGByGender(gender);
        if (!pgList.isEmpty()) {
            System.out.println("Matching PGs:");
            for (PayingGuest pg : pgList) {
                System.out.println("PG ID: " + pg.getPgId());
                System.out.println("PG Name: " + pg.getPgName());
                System.out.println("PG Type: " + pg.getPgType());
                System.out.println("---------------------------");
            }
        } else {
            System.out.println("No PGs found for the given gender.");
        }
    }
}

public class PayingGuestApp {
    private static Scanner scanner = new Scanner(System.in);
    private static final String ADMIN_PASSWORD = "admin123";

    public static void main(String[] args) {
        System.out.println("Enter user type (admin/user): ");
        String userType = scanner.nextLine();

        UserType user;

        if (userType.equalsIgnoreCase("admin")) {
            System.out.println("Enter admin password: ");
            String enteredPassword = scanner.nextLine();

            if (enteredPassword.equals(ADMIN_PASSWORD)) {
                System.out.println("Admin login successful!");
                user = new AdminUser();
            } else {
                System.out.println("Invalid admin password. Exiting the application.");
                return;
            }
        } else if (userType.equalsIgnoreCase("user")) {
            user = new RegularUser();
        } else {
            System.out.println("Invalid user type. Exiting the application.");
            return;
        }
        user.performUserRegistration();
        user.handleOperations();
    }
}







































































