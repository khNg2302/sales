public with sharing class OrderClass {
    @AuraEnabled(cacheable=true)
    public static TT_Order_detail__c newDetail (TTOrder__c order,TTProduct__c product,Integer quantity){
    
        TT_Order_detail__c newItem = new TT_Order_detail__c(TTOrder__r=order,TTProduct__r=product,Quantity__c= quantity);
        // newItem.TTOrder__c=item.TTOrder__c;
        //  newItem.TTProduct__c=item.TTProduct__c;
        //  newItem.Quantity__c= item.Quantity__c;
       return newItem;
   }

   public static insertDetail (List<TT_Order_detail__c> detail) {
    insert detail;
   }

   public static TTOrder__c  createOrder (TTCustomer__c customer){
    TTOrder__c newOrder = new TTOrder__c(Name='', TTCustomer__r=customer, Status__c='Paid');

    insert newOrder;

    return newOrder;
   }
}
