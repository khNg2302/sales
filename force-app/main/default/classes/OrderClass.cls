public with sharing class OrderClass {
    @AuraEnabled(cacheable=true)
    public static TT_Order_detail__c newDetail (TTOrder__c order,TTProduct__c product,Integer quantity){
    
        TT_Order_detail__c newItem = new TT_Order_detail__c(TTOrder__c=order.Id,TTProduct__c=product.Id,Quantity__c= quantity);
        // newItem.TTOrder__c=item.TTOrder__c;
        //  newItem.TTProduct__c=item.TTProduct__c;
        //  newItem.Quantity__c= item.Quantity__c;
       return newItem;
   }

   @AuraEnabled
   public static void insertDetail (List<TT_Order_detail__c> detail) {
    insert detail;
   }
   
   @AuraEnabled
   public static TTOrder__c  createOrder (TTCustomer__c customer){
    TTOrder__c newOrder = new TTOrder__c(Name=customer.Name+' '+ DateTime.now().format('dd-MM-yyyy HH:mm'), TTCustomer__c=customer.Id, Status__c='Paid');

    insert newOrder;

    return newOrder;
   }
}
