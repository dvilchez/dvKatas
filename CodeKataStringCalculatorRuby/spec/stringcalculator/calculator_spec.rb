require File.join(File.dirname(__FILE__), "/../spec_helper")

module StringCalculator
	describe "Calculator" do
		describe "Add" do
			context "cuando cadena vacia" do
				it "la suma debería ser 0" do
					Calculator.Add("").should==0
				end
			end

			context "cuando un número" do
				it "la suma debería ser el número" do
					Calculator.Add("1").should==1
				end
			end 

			context "cuando dos números separados por comas" do
				it "la suma debería ser la suma de los dos" do
					Calculator.Add("1,2").should==3
				end
			end

			context "cuando recibe una cantidad desconocida de números separados por comas" do
				it "la suma debería ser la suma de todos los números de la cadena" do
					Calculator.Add("1,2,3").should==6
				end
			end

			context "cuando se recibe números separados por comas y/o retorno de carro" do
				it "la suma debería ser la suma de los números de la cadena" do
					Calculator.Add("1\n2,3").should==6
				end
			end

			context "cuando se recibe //[separador]\n[número][separador][número]..." do
				it "la suma debería ser la suma de los números de la cadena" do
					Calculator.Add("//;\n1;3;3").should==7
				end
			end
		end
	end
end