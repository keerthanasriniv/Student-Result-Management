package pg;

public class PayingGuest {
    private int pgId;
    private String pgName;
    private String pgType; // Male/Female

    public PayingGuest(int pgId, String pgName, String pgType) {
//        this.pgId = pgId;
        this.pgName = pgName;
        this.pgType = pgType;
    }

    // Getters and setters
    public int getPgId() {
        return pgId;
    }

    public void setPgId(int pgId) {
        this.pgId = pgId;
    }

    public String getPgName() {
        return pgName;
    }

    public void setPgName(String pgName) {
        this.pgName = pgName;
    }

    public String getPgType() {
        return pgType;
    }

    public void setPgType(String pgType) {
        this.pgType = pgType;
    }
}
