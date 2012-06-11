module StringCalculator
	class Calculator
		def self.Add(numbers)
			sum=0
			numbers.split(%r{[,\n]{1,}}).each {|x| sum+=x.to_i}
			
			return sum
		end
	end
end