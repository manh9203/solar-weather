function cleanResponse(obj, index) {
  switch (index) {
    case 0: //CME
      return {
        type: "CME",
        time: obj["time21_5"],
        id: obj["associatedCMEID"],
      };
    case 1: //GST
      return {
        type: "GST",
        time: obj["startTime"],
        id: obj["gstID"],
      };
    case 2: //IPS
      return {
        type: "IPS",
        time: obj["eventTime"],
        id: obj["activityID"],
      };
    case 3: //FLR
      return {
        type: "FLR",
        time: obj["beginTime"],
        id: obj["flrID"],
      };
    case 4: //SEP
      return {
        type: "SEP",
        time: obj["eventTime"],
        id: obj["sepID"],
      };
    case 5: //MPC
    return {
      type: "MPC",
      time: obj["eventTime"],
      id: obj["mpcID"],
    };
    case 6: //RBE
      return {
        type: "RBE",
        time: obj["eventTime"],
        id: obj["rbeID"],
      };
    case 7: //HSS
      return {
        type: "HSS",
        time: obj["eventTime"],
        id: obj["hssID"],
      };
  }
}

export default cleanResponse;
