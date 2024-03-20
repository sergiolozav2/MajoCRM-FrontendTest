/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChatService {
    /**
     * Ruta para obtener chats de un WA_Sesion
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postChat(
        body?: {
            wa_sesionID: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chat/',
            body: body,
        });
    }
}
