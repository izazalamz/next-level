//* Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement over time.

//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

//? Output
// binnedEvents = {
//   "2025-10-22T10:00:00.000Z": { "total": 3 },
//   "2025-10-22T10:30:00.000Z": { "total": 2 },
//   "2025-10-22T11:00:00.000Z": { "total": 1 }
// }

const binnedEvents = events.reduce((bins, event) => {
  const time = new Date(event.timestamp);
  const minutes = time.getUTCMinutes();
  const interval = 30;
  const bucket = Math.floor(minutes / interval) * interval;
  const binDate = new Date(time);
  binDate.setUTCMinutes(bucket, 0, 0);
  const key = binDate.toISOString();

  if (!bins[key]) {
    bins[key] = { total: 0 };
  }
  bins[key].total += 1;
  return bins;
}, {});

console.log(binnedEvents);
