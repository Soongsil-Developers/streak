"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var dayjs_1 = __importDefault(require("dayjs"));
var stringRange = [];
var streakHelper = {
    getRange: function (start, end) {
        return (0, date_fns_1.eachDayOfInterval)({ start: start, end: end });
    },
    changeFormatRange: function (range) {
        return range.forEach(function (yyyymmdd) {
            return stringRange.push((0, dayjs_1.default)(yyyymmdd).format('YYYYMMDD'));
        });
    },
    changeFormatDate: function (dates) {
        var map = new Map();
        dates.forEach(function (date) {
            var _a;
            var key = (0, dayjs_1.default)(date.date).format('YYYYMMDD');
            var value = { type: date.type, amount: date.amount };
            if (map.has(key))
                (_a = map.get(key)) === null || _a === void 0 ? void 0 : _a.push(value);
            else
                map.set(key, [value]);
        });
        return map;
    },
    sortForDate: function (date) {
        return date.sort(function (a, b) { return (0, date_fns_1.compareAsc)(a.date, b.date); });
    },
    sumAmountByType: function (mapByDate) {
        var newMap = new Map();
        mapByDate.forEach(function (value, key) {
            newMap.set(key, []);
            value.forEach(function (obj) {
                var _a, _b;
                var summedUp = false;
                (_a = newMap.get(key)) === null || _a === void 0 ? void 0 : _a.forEach(function (compareObj) {
                    if (obj.type === compareObj.type) {
                        compareObj.amount += obj.amount;
                        summedUp = true;
                    }
                });
                if (summedUp === false) {
                    (_b = newMap.get(key)) === null || _b === void 0 ? void 0 : _b.push(obj);
                }
            });
        });
        return newMap;
    },
    putRangeDate: function (array) {
        var newArray = new Map();
        for (var _i = 0, stringRange_1 = stringRange; _i < stringRange_1.length; _i++) {
            var i = stringRange_1[_i];
            if (array.has(i))
                newArray.set(i, array.get(i));
            else
                newArray.set(i, []);
        }
        return newArray;
    },
};
exports.default = streakHelper;
