// Depending on the type of error, some or most of these fields may not exist
export type ErrorResponseType = {
  status?: number;
  statusText?: string;
  internal?: boolean;
  data?: string;
  error?: Error;
  message?: string;
};
