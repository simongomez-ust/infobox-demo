using {
    cuid,
    managed,
    sap.common.CodeList
} from '@sap/cds/common';

namespace sap.demo.infobox;

entity Employee : cuid, managed {
    key ID                   : UUID;
        firstName            : String;
        lastName             : String;
        managementUnit       : String;
        organization         : String;
        organizationDivision : String;
        mangementPosition    : String;
        legalPosition        : String;
        admissionDate        : Date;
        workSchedule         : String enum {
            changeable = 'Changeable';
            fixed      = 'Fixed';
        }
}

entity Leaves : cuid, managed {
    key ID         : UUID;
        employeeId : Association to one Employee; // Empleado
        startDate  : Date; //Fecha inicio de vacaciones
        endDate    : Date; //Fecha final de vacaciones
        type       : String enum {
            anual    = 'Anual leave';
            medical  = 'Medical leave';
            personal = 'Personal leave';
        }; //Type (Anual leave, Medical leave, Personal leave)
        status     : String enum {
            accepted = 'Accepted';
            pending  = 'Pending';
            rejected = 'Rejected';
        }; //Status (Accepted, Pending, Rejected)
}
