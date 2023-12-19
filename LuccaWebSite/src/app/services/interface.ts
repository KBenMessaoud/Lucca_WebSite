export interface UserBirthday {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    'picture.href': string;
    'department.id': number;
    'department.name': string;
    birthDate: string;
    dtcontractstart: string;
  }
  
  export interface ApiResponse {
    data: {
      items: UserBirthday[];
    };
  }