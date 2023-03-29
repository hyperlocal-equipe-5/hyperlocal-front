import { useEffect } from 'react';
import { UserIdHandler } from '../../helpers/handlers/userId/userIHandler-helper';
import { userAccessValidator } from '../../helpers/validators/userAccess-validator';
import { makeUserRouterFactory } from '../../infra/api/factories/routers/user/userRouter-factory';
import { type UserAccess } from '../../types/UserAccessType';

interface Props {
	setLoading: (loadingState: boolean) => void;
	navigateFunction: (path: string) => void;
	accessType: UserAccess;
}

export function AccessValidator({
	setLoading,
	navigateFunction,
	accessType,
}: Props) {
	useEffect(() => {
		makeUserRouterFactory()
			.getOneUser(new UserIdHandler().get())
			.then(response => {
				if (!userAccessValidator(response.body, accessType)) {
					navigateFunction('/');
				}
				setLoading(false);
			})
			.catch(error => error);
	}, []);

	return <></>;
}
