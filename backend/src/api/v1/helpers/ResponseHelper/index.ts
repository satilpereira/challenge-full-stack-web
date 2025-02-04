class ResponseHelper {
  static success({
    status,
    message,
    payload,
  }: {
    status: number;
    message: string;
    payload: any;
  }) {
    return {
      status,
      message,
      payload,
    };
  }

  static error({
    status,
    error,
    message,
    details,
  }: {
    status: number;
    message: string;
    details: string | object;
    error: string;
  }) {
    return {
      status,
      error,
      message,
      details,
    };
  }
}

export default ResponseHelper;
