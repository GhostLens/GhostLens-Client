export type TActivityItemType = {
  id: string;
  target: {
    chat_title: string;
    chat_id: string;
    total_messages: number;
    extracted_messages: number;
  };
  tg_account: {
    user_id: number;
    full_name: string;
  };
  progress: {
    precent: number;
    status: "ACTIVE" | "DONE" | "PAUSE" | "ERROR";
    error_cause?: string;
  };
};
