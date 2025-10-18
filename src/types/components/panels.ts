interface Activity {
  title: string;
  description: string;
}

export interface DevelopmentProcedure {
  phase: string;
  title: string;
  alias?: string;
  objective: string;
  icon: string;
  activity: Activity[];
  description?: string;
}
