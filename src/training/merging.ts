import { formatDate } from './util'

const formattedDate = formatDate(new Date());
console.log(formattedDate)

class Customer {}
const customer = new Customer();
customer.save();

interface Customer{
    /**
     * decoration merging 
     */
    save(): void
}
const myVar = window.MY_VAR