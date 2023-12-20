public with sharing class ProductOrder {
    @AuraEnabled(cacheable=true)
    public static List<TTProduct__c> getProduct (Id id) {
    try{
        return [Select Name, Price__c From TTProduct__c Where Id =: id Limit 1];
    }catch (Exception ex){
        throw new AuraHandledException(ex.getMessage());
    }
   }
}
