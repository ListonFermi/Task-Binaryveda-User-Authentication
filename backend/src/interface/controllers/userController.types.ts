export type ControllerResponse = {
  headers: { "Content-Type": string };
  statusCode: number;
  body: any;
  token? : string
};
