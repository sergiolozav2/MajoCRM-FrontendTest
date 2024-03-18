/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postAuthRegister(
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
            empresa: {
                nombreEmpresa: string;
            };
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register',
            body: body,
        });
    }
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postAuthLogin(
        body?: {
            email: string;
            password: string;
        },
    ): CancelablePromise<any> {
        return __request({...OpenAPI, WITH_CREDENTIALS: true}, {
            method: 'POST',
            url: '/auth/login',
            body: body,
        });
    }
    /**
     * @param authorization
     * @returns any Default Response
     * @throws ApiError
     */
    public static postAuthRefreshToken(
        authorization: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/refreshToken',
            headers: {
                'authorization': authorization,
            },
        });
    }
}
