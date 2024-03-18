/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IntegrantesService {
    /**
     * @param authorization
     * @returns any Default Response
     * @throws ApiError
     */
    public static postIntegrantes(
        authorization: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/integrantes/',
            headers: {
                'authorization': authorization,
            },
        });
    }
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postIntegrantesInvitarUsuario(
        body?: {
            usuario: {
                nombre: string;
                apellido: string;
                segundoApellido: string;
                correo: string;
                telefono: string;
                password: string;
                verificado: boolean;
            };
            empresaID: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/integrantes/invitar_usuario',
            body: body,
        });
    }
}
