export interface todo {
  id?: string;
  title?: string;
  type?: "music" | "sport" | "shopping" | "other" | undefined | string;
  delay?: number;
  isComplete?: boolean;
}
