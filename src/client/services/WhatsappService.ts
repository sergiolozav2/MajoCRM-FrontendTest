/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WhatsappService {
    /**
     * Para crear sesiones
     * @returns any Default Response
     * @throws ApiError
     */
    public static getWhatsappSesion(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/whatsapp/sesion',
        });
    }
    /**
     * Para obtener sesiones de whatsapp
     * @returns any Default Response
     * @throws ApiError
     */
    public static getWhatsappSesiones(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/whatsapp/sesiones',
        });
    }
    /**
     * @param sesionId
     * @returns any Default Response
     * @throws ApiError
     */
    public static getWhatsappRecibirMensajes(
        sesionId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/whatsapp/recibir-mensajes',
            query: {
                'sesionID': sesionId,
            },
        });
    }
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postWhatsappEnviarMensaje(
        body?: {
            sesionID: string;
            mensaje: string;
            telefono: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/whatsapp/enviar-mensaje',
            body: body,
        });
    }
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postWhatsappEnviarImagen(
        body?: {
            sesionID: string;
            telefono: string;
            url: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/whatsapp/enviar-imagen',
            body: body,
        });
    }
}
