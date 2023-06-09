"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const persona_router_1 = __importDefault(require("./routers/persona-router"));
const settings_1 = __importDefault(require("./lib/settings"));
const app = (0, express_1.default)();
const parseJSON = express_1.default.json({ limit: '1mb' });
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
app.use('/api/personas', parseJSON, persona_router_1.default);
app.listen(settings_1.default.port, () => {
    return console.log(`Express is listening at http://localhost:${settings_1.default.port}`);
});
//# sourceMappingURL=app.js.map