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
const persona_service_1 = __importDefault(require("../services/persona-service"));
const create = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = request;
        const persona = yield persona_service_1.default.create(body);
        return response.status(201).send(persona);
    }
    catch (error) {
        return next(error);
    }
});
const fetch = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const persona = yield persona_service_1.default.getOnePerson(id);
        return response.status(200).send(persona);
    }
    catch (error) {
        return next(error);
    }
});
const list = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personas = yield persona_service_1.default.list();
        return response.status(200).send(personas);
    }
    catch (error) {
        return next(error);
    }
});
const remove = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    yield persona_service_1.default.remove(id);
    return response.status(204).end();
});
const update = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const { body } = request;
        const persona = yield persona_service_1.default.update(id, body);
        return response.status(200).send(persona);
    }
    catch (error) {
        return next(error);
    }
});
exports.default = {
    create,
    fetch,
    list,
    remove,
    update,
};
//# sourceMappingURL=persona-controller.js.map