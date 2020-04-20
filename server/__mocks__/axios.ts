import { AxiosStatic } from "axios";

const axiosMock = jest.genMockFromModule<AxiosStatic>("axios");

module.exports = axiosMock;
