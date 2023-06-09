"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const persona_controller_1 = __importDefault(require("../controllers/persona-controller"));
const personaRouter = express_1.default.Router();
personaRouter.get('/', persona_controller_1.default.list);
personaRouter.get('/:id', persona_controller_1.default.fetch);
personaRouter.post('/', persona_controller_1.default.create);
personaRouter.put('/:id', persona_controller_1.default.update);
personaRouter.delete('/:id', persona_controller_1.default.remove);
exports.default = personaRouter;
//# sourceMappingURL=persona-router.js.map