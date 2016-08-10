class ResCost{
  resourceName: string;
  cost: string;
  usageInHours: number;
}

export class ProjUsers{
  users: string[];
  projectID: string;
  projectName: string;
  fromDate: string;
  toDate: string;
  private resCost: ResCost[];
}