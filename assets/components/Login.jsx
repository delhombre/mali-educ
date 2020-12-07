import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Slide,
	TextField,
} from "@material-ui/core";
import React, { useContext } from "react";
import LoginModalContext from "../contexts/LoginModalContext";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const Login = () => {
	const { open, handleClose } = useContext(LoginModalContext);

	return (
		<>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">Connexion</DialogTitle>
				<DialogContent>
					<form id="login-form">
						<Grid container spacing={1} direction="row">
							<Grid item xs={12} lg={6}>
								<TextField
									autoFocus
									margin="dense"
									id="username"
									name="username"
									label="Adresse email"
									type="email"
									fullWidth
								/>
							</Grid>
							<Grid item xs={12} lg={6}>
								<TextField
									autoFocus
									margin="normal"
									id="password"
									label="Mot de passe"
									type="password"
									name="password"
									fullWidth
								/>
							</Grid>
						</Grid>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Annuler
					</Button>
					<Button
						type="submit"
						form="login-form"
						onClick={handleClose}
						color="primary"
						variant="contained"
						disableElevation
					>
						Je me connecte
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default Login;
