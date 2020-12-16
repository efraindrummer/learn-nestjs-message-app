import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensaje } from './dto/entities/mensaje.entity';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Injectable()
export class MensajesService {
    constructor(
        @InjectRepository(Mensaje)
        private mensajeRepository: Repository<Mensaje>,
    ) {}

    async getAll(): Promise<Mensaje[]>{
        return await this.mensajeRepository.find();
    }

    async createMensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje>{
        const nuevo = new Mensaje();

        nuevo.nick = mensajeNuevo.nick;
        nuevo.mensaje = mensajeNuevo.mensaje;

        return await this.mensajeRepository.save(nuevo);
    }

    async updateMensaje(idMensaje: number, mensajeActualiar: CreateMensajeDto): Promise<Mensaje>{
        const mensajeUpdate = await this.mensajeRepository.findOne(idMensaje);

        mensajeUpdate.nick = mensajeActualiar.nick;
        mensajeUpdate.mensaje = mensajeActualiar.mensaje;

        return await this.mensajeRepository.save(mensajeUpdate);
    }

    async deleteMensaje(idMensaje: number): Promise<any>{
        return await this.mensajeRepository.delete(idMensaje);
    }
}
