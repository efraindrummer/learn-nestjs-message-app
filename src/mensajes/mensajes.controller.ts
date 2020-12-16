import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Controller('mensajes')
export class MensajesController {

    @Post()
    create(@Body() crateMensajeDto: CreateMensajeDto){
        return 'mensaje creado';
    }

    @Get()
    getAll(){
        return 'lista de mensajes';
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto){
        return 'mensaje actualizado';
    }

    @Delete(':id')
    delete(){
        return 'Mensaje eliminado';
    }
}
