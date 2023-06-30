import callAPIs from "../src/utils/apiCaller";
import cleanResponse from "../src/utils/cleanResponse";

describe("API Call Utilities Should work", () => {
  it('should call the API enough times', async function () {
    const validData = callAPIs(new Date(2023, 5, 23), new Date(2023,5 ,29));
    const result = await validData;
    expect(result.flat()).toHaveLength(30);
  });
  
  it('should call the API enough times, not a fluke', async function () {
    const validData = callAPIs(new Date(2023, 4, 29), new Date(2023,5 ,4));
    const result = await validData;
    expect(result.flat()).toHaveLength(20);
  });

  it('should clean CME event responses', () => {
    const data = {
      time21_5: "2016-09-06T14:18Z",
      latitude: -20,
      longitude: 120,
      halfAngle: 31,
      speed: 674,
      type: "C",
      isMostAccurate: true,
      associatedCMEID: "2016-09-06T08:54:00-CME-001",
      note: "",
      catalog: "M2M_CATALOG",
      link: "https://kauai.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/11233/-1",
    }
    const result = cleanResponse(data, 0);
    expect(result).toEqual({ type: "CME", id: "2016-09-06T08:54:00-CME-001", time: "2016-09-06T14:18Z"})
  })

  it('should clean IPS event responses', () => {
    const data = {
      catalog: "M2M_CATALOG",
      activityID: "2023-06-23T17:33:00-IPS-001",
      location: "Earth",
      eventTime: "2023-06-23T17:33Z",
      link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/IPS/25701/-1",
      instruments: [
        { displayName: "ACE: MAG" },
        { displayName: "ACE: SWEPAM" },
        { displayName: "DSCOVR: PLASMAG" },
      ],
    }
    const result = cleanResponse(data, 2);
    expect(result).toEqual({ type: "IPS", id: "2023-06-23T17:33:00-IPS-001", time: "2023-06-23T17:33Z"})
  })
})