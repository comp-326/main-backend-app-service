import { INext, IRequest, IResponse } from '@exam-cell-common/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function (req: IRequest, res: IResponse, next: INext){
	const html =
		'<p style=\'text-align:center;font-family:Helvetica,Arial,sans-serif; padding:40px;\'>Application test is working</p>';

	return res.status(200).send(html);
}
