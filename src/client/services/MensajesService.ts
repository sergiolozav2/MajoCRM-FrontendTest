/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MensajesService {
    /**
     * @param authorization
     * @returns any Default Response
     * @throws ApiError
     */
    public static getMensajes(
        authorization: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mensajes/',
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
    public static postMensajes(
        authorization: string,
        body?: {
            nombreItem: string;
            descripcion: string;
            precio: number;
            informacionExtra: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mensajes/',
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
    public static putMensajes(
        authorization: string,
        body?: {
            item: {
                nombreItem?: string;
                descripcion?: string;
                precio?: number;
                informacionExtra?: string;
            };
            itemID: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/mensajes/',
            headers: {
                'authorization': authorization,
            },
            body: body,
        });
    }
}
