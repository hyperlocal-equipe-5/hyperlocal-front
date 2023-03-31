import { type TableIdHandlerInterface } from '../../abstract/handlers/tableIdHandler-helper-interface';
import { Handler } from '../class/haldler';

export class TableIdHandler extends Handler implements TableIdHandlerInterface {
	public constructor() {
		super('tableId');
	}
}
