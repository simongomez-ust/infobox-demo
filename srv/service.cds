using {sap.demo.infobox as my} from '../db/schema';

service LeaveService {
    entity Employee as projection on my.Employee;
    entity Leaves   as projection on my.Leaves;
}
