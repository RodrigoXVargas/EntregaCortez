"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const personas_1 = __importDefault(require("../data/personas"));
const create = (persona) => __awaiter(void 0, void 0, void 0, function* () {
    personas_1.default.push(Object.assign(Object.assign({}, persona), { id: (+new Date()).toString() }));
    return persona;
});
const list = () => __awaiter(void 0, void 0, void 0, function* () {
    return personas_1.default;
});
const fetch = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return personas_1.default.find((p) => p.id === id);
});
const update = (id, persona) => __awaiter(void 0, void 0, void 0, function* () {
    const index = personas_1.default.findIndex((p) => p.id === id);
    personas_1.default[index] = persona;
    return persona;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const index = personas_1.default.findIndex((p) => p.id === id);
    personas_1.default.splice(index, 1);
});
exports.default = {
    create,
    list,
    fetch,
    update,
    remove,
};
//# sourceMappingURL=persona-service.js.map