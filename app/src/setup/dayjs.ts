import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(duration);
dayjs.extend(localizedFormat);
