/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ClienteService {
    /**
     * @param authorization
     * @returns any Default Response
     * @throws ApiError
     */
    public static getCliente(
        authorization: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cliente/',
            headers: {
                'authorization': authorization,
            },
        });
    }
    /**
     * @param authorization
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postCliente(
        authorization: string,
        body?: {
            identificador: string;
            cliente: {
                nombreCliente: string;
            };
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cliente/',
            headers: {
                'authorization': authorization,
            },
            body: body,
        });
    }
    /**
     * @param authorization
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static putCliente(
        authorization: string,
        body?: {
            clienteID: number;
            identificador?: string;
            cliente?: {
                nombreCliente: string;
            };
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cliente/',
            headers: {
                'authorization': authorization,
            },
            body: body,
        });
    }
}
