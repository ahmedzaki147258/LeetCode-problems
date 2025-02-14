/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeNodes(ListNode head) {
        ListNode begin=new ListNode();
        ListNode res=begin;
        ListNode curr=head.next;
        while (curr!=null) {
            int sum=0;
            while (curr!=null && curr.val!=0) {
                sum+=curr.val;
                curr=curr.next;
            }
            res.next=new ListNode(sum);
            res=res.next;
            curr=curr.next;
        }
        return begin.next;
    }
}