exports._401 = async(res, message) => {
  let obj = {
    status: 401,
    message: message
  }
  return obj;
}

exports._402 = async(res, message) => {
  let obj = {
    status: 402,
    message: message
  }
  return obj;
}

exports._403 = async(res, message) => {
  let obj = {
    status: 403,
    message: message
  }
  return obj;
}