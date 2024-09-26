public class tester {
    public static void main(String[] args) {
//test cases. You can add the cases from hw2 to check your work
        quotientRemainder(32, 10); // q = 3, r = 2
        quotientRemainder(-32, 10); // q = -4, r = 8
        quotientRemainder(71, 16); // q = 4, r = 7
        quotientRemainder(-71, 16); //q = -5, r = 9
        quotientRemainder(14, 7); //q = 2, r = 0
        quotientRemainder(-14, 7); //q = -2, r = 0
    }
    /** Computes the values of the quotient and remainder for all integer n and
     positive integer d**/
    public static void quotientRemainder(int n, int d){
        qrResult res;
        if (n >= 0) {
            res = naiveQuotientRemainder(n, d);
        }
// n is negative
        else {
//TO DO
            /*Stub*/ res = new qrResult(0, 0); /*Stub*/
        }
        print(n, d, res);
    }
    /** Compute the quotient and remainder for positive n and positive d **/
    public static qrResult naiveQuotientRemainder (int n, int d){
        return (new qrResult(n/d, n%d));
    }
    /** print quotient and remainder**/
    public static void print(int n, int d, qrResult qr) {
        System.out.println("n: " + n + "\t d: " + d + "\t Quotient: " +
                qr.quotient + "\t Remainder: " + qr.remainder);
    }
}
/** This record represents the result of integer division **/
class qrResult{
    int quotient;
    int remainder;
    public qrResult(int q, int r){
        this.quotient = q;
        this.remainder = r;
    }
}
