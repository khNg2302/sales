public with sharing class CustomerOrder {
    @AuraEnabled(cacheable=true)
    public static List<TTCustomer__c> getCustomer (Id id){
        try{
            return [Select Name From TTCustomer__c Where Id =: id Limit 1];
        }catch (Exception ex){
            throw new AuraHandledException(ex.getMessage());
        }
    }
}
