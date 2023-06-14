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
Object.defineProperty(exports, "__esModule", { value: true });
const create = (persona) => __awaiter(void 0, void 0, void 0, function* () {
    fetch(`http://localhost:3000/personas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(persona),
    });
});
const list = () => __awaiter(void 0, void 0, void 0, function* () {
    return fetch("http://localhost:3000/personas")
        .then(response => response.json());
});
const getOnePerson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return fetch(`http://localhost:3000/personas/${id}`);
});
const update = (id, persona) => __awaiter(void 0, void 0, void 0, function* () {
    fetch(`http://localhost:3000/personas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(persona),
    });
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    fetch(`http://localhost:3000/personas/${id}`, {
        method: 'DELETE',
    });
});
exports.default = {
    create,
    list,
    getOnePerson,
    update,
    remove,
};
//# sourceMappingURL=persona-service.js.map