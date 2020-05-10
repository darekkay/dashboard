import axios, { AxiosStatic } from "axios";

const cachios = jest.genMockFromModule<AxiosStatic>("cachios");

const create = () => axios;

cachios.create = create;

module.exports = cachios;
