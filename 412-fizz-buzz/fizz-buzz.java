class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> ans = new ArrayList();
        for (int i = 1; i <= n; i++) {
            String res = "";
            if (i%3 == 0) {
                res += "Fizz";
            } 
            if (i%5 == 0) {
                res += "Buzz";
            }
            if (res.isEmpty()) {
                res = String.valueOf(i);
            }
            ans.add(res);
        }
        return ans;
    }
}