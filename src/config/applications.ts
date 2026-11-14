export type ApplicationStatus = "not-open" | "open" | "closed" | "complete";

export type ApplicationScheduleConfig = {
  opensAt: string;
  closesAt: string;
  completeAt: string | null;
  statusOverride: ApplicationStatus | null;
  googleFormUrl: string;
};

export const applicationConfig: ApplicationScheduleConfig = {
  opensAt: "2026-12-01T00:00:00+07:00",
  closesAt: "2026-12-21T23:59:59+07:00",
  completeAt: null as string | null,
  statusOverride: null as ApplicationStatus | null,
  // The supplied repository did not contain the existing form URL. Set it here
  // when available; an empty value never renders a broken or placeholder link.
  googleFormUrl: "https://forms.gle/2JWAUMWKV3Bu6BLJ6",
};

export function getApplicationStatus(
  now: number | Date,
  schedule: ApplicationScheduleConfig = applicationConfig,
): ApplicationStatus {
  if (schedule.statusOverride !== null) return schedule.statusOverride;

  const currentTime = typeof now === "number" ? now : now.getTime();
  if (schedule.completeAt !== null && currentTime >= Date.parse(schedule.completeAt)) {
    return "complete";
  }
  if (currentTime < Date.parse(schedule.opensAt)) return "not-open";
  if (currentTime <= Date.parse(schedule.closesAt)) return "open";
  return "closed";
}
