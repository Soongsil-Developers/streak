"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var dayjs_1 = __importDefault(require("dayjs"));
var stringPeriod = [];
var streakHelper = {
    getPeriod: function (start, end) {
        return (0, date_fns_1.eachDayOfInterval)({ start: start, end: end });
    },
    makeStringPeriod: function (period) {
        for (var _i = 0, period_1 = period; _i < period_1.length; _i++) {
            var i = period_1[_i];
            stringPeriod.push((0, dayjs_1.default)(i).format('YYYYMMDD'));
        }
    },
    sortData: function (data) {
        return data.sort(function (a, b) { return (0, date_fns_1.compareAsc)(a.date, b.date); });
    },
    3: function () { },
    4: function () { },
    putPeriodData: function (array) {
        var newArray = new Map();
        for (var _i = 0, stringPeriod_1 = stringPeriod; _i < stringPeriod_1.length; _i++) {
            var i = stringPeriod_1[_i];
            var value = array.has(i) ? array.get(i) : null;
            newArray.set(i, [value]);
        }
        return newArray;
    },
};
exports.default = streakHelper;
