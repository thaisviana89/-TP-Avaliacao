ETEC Professor Hor�cio Augusto da Silveira
Avalia��o de Design Digital � Segundo Bimestre � Usabilidade e Padr�es de Projeto

Nome: Thais Aparecida Silva Viana



private void btnRaiz_Click(object sender, EventArgs e)
        {
            double nro1;
            double nro2;
            double raiz;
            string rraiz;
            try
            {
                nro1 = Convert.ToDouble(txtNro1.Text);
                raiz = Math.Sqrt(nro1);
                rraiz = Convert.ToString(raiz);
                txtResultado.Text = rraiz;
            }
            catch (FormatException)
            {
                MessageBox.Show("Formata��o Errada.");
            }
        }


1.	Organize o c�digo acima segundo o que foi explicado nas aulas de t�cnicas de programa��o afim de garantir legibilidade e sustentabilidade do c�digo.

2.	Desenhe uma classe que implemente o c�digo acima como um m�todo. 
