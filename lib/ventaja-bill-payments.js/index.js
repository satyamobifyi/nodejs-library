import Signature from "../../common/signature";
import UtilService from "../../common/utils";
import { VentajaCodes } from "../../common/code";

module.exports = class VentajaBillPayments {

    constructor() {
        this.ventajaSignService = new Signature();
        this.utilService = new UtilService();
    } // End of the constructor


    // Get Outlet balance
    async getOutletBalance(payload) {
        const data = {
            id: this.ventajaSignService.options.id,
            uid: this.ventajaSignService.options.uid,
            pwd: this.ventajaSignService.options.pwd,
            countryCode: this.ventajaSignService.options.countryCode,
            code: VentajaCodes.VENTALA_OUTLET_BALANCE,
            data: payload
        }
        // console.log("Your dataToSend Ventaja", data);
        const Signature = await this.ventajaSignService.createSignature(data);
        const base64Signature = await this.ventajaSignService.hexToBase64(Signature);
        const result = await this.utilService.postWithSignature(
            `${this.ventajaSignService.options.ventajaUrl}validate`,
            data,
            this.utilService.getHeaders()
        );


    } 

}