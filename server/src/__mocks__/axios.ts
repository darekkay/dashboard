import { AxiosStatic } from "axios";

const axiosMock = jest.createMockFromModule<AxiosStatic>("axios");

module.exports = axiosMock;
