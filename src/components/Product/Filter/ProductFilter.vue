<template>
	<div class="box-list__panel">
		<div class="box-filter__opener">
			<button type="button" class="btn btn--primary js-product-filter-open-button">
				Product filter
				<i class="svg svg-arrow"></i>
			</button>
		</div>
		<div class="box-filter js-product-filter">
			<form name="product_filter_form" method="get" action="http://master.heimdall.netdevelo:7980/electronics/" novalidate="novalidate" role="form">
				<div class="box-filter__price js-product-filter-box" data-product-filter-box-id="product_filter_box_price">
					<span class="box-filter__choice__title active js-product-filter-box-label">
						Price
						<i class="svg svg-arrow cursor-pointer js-product-filter-box-arrow"></i>
					</span>
					<div id="product_filter_box_price" class="box-filter__slider__wrap">
						<div class="box-filter__slider__wrap__range js-range-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-minimum-input-id="product_filter_form_minimalPrice" data-minimal-value="12.750000" data-maximum-input-id="product_filter_form_maximalPrice" data-maximal-value="863.600000">
							<div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 100%;"></div>
							<span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"></span>
							<span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 100%;"></span>
						</div>
						<div class="box-filter__price__item">
							<input type="text" id="product_filter_form_minimalPrice" name="product_filter_form[minimalPrice]" class="js-product-filter-call-change-after-reset input" placeholder="€12.75">
						</div>
						<div class="box-filter__price__item box-filter__price__item--text">
							to
						</div>
						<div class="box-filter__price__item box-filter__price__item--right">
							<input type="text" id="product_filter_form_maximalPrice" name="product_filter_form[maximalPrice]" class="js-product-filter-call-change-after-reset input" placeholder="€863.60">
						</div>
					</div>
				</div>

				<div class="box-filter__choice js-product-filter-box" data-product-filter-box-id="product_filter_box_availability">
					<span class="box-filter__choice__title active js-product-filter-box-label">
						Availability
						<i class="svg svg-arrow cursor-pointer js-product-filter-box-arrow"></i>
					</span>
					<div id="product_filter_box_availability" class="box-filter__choice__inputs">
						<div class="form-choice">
							<input type="checkbox" id="product_filter_form_inStock" name="product_filter_form[inStock]" class="css-checkbox" value="1">
							<label class="css-checkbox__image form-choice__label" for="product_filter_form_inStock">
								Products in stock only
								<span class="js-product-filter-count" data-form-id="product_filter_form_inStock">(4)</span>
							</label>
						</div>
					</div>
				</div>

				<div class="box-filter__choice js-product-filter-box" data-product-filter-box-id="product_filter_form_flags">
					<span class="box-filter__choice__title active js-product-filter-box-label">
						Flags
						<i class="svg svg-arrow cursor-pointer js-product-filter-box-arrow"></i>
					</span>
					<div id="product_filter_form_flags" class="box-filter__choice__inputs">
						<div class="form-choice">
							<input type="checkbox" id="product_filter_form_flags_0" name="product_filter_form[flags][]" class="css-checkbox" value="3">
							<label class="css-checkbox__image form-choice__label" for="product_filter_form_flags_0">
								Action
								<span class="js-product-filter-count" data-form-id="product_filter_form_flags_0">(1)</span>
							</label>
						</div>
						<div class="form-choice">
							<input type="checkbox" id="product_filter_form_flags_1" name="product_filter_form[flags][]" class="css-checkbox" value="2">
							<label class="css-checkbox__image form-choice__label" for="product_filter_form_flags_1">
								TOP
								<span class="js-product-filter-count" data-form-id="product_filter_form_flags_1">(2)</span>
							</label>
						</div>
					</div>
				</div>

				<div class="box-filter__choice js-product-filter-box" data-product-filter-box-id="product_filter_form_brands">
					<span class="box-filter__choice__title active js-product-filter-box-label">
						Brand
						<i class="svg svg-arrow cursor-pointer js-product-filter-box-arrow"></i>
					</span>
					<div id="product_filter_form_brands" class="box-filter__choice__inputs">
						<div class="form-choice">
							<input type="checkbox" id="product_filter_form_brands_0" name="product_filter_form[brands][]" class="css-checkbox" value="6">
							<label class="css-checkbox__image form-choice__label" for="product_filter_form_brands_0">
								A4tech
								<span class="js-product-filter-count" data-form-id="product_filter_form_brands_0">(1)</span>
							</label>
						</div>
						<div class="form-choice">
							<input type="checkbox" id="product_filter_form_brands_1" name="product_filter_form[brands][]" class="css-checkbox" value="3">
							<label class="css-checkbox__image form-choice__label" for="product_filter_form_brands_1">
								LG
								<span class="js-product-filter-count" data-form-id="product_filter_form_brands_1">(1)</span>
							</label>
						</div>
						<div class="form-choice">
							<input type="checkbox" id="product_filter_form_brands_2" name="product_filter_form[brands][]" class="css-checkbox" value="4">
							<label class="css-checkbox__image form-choice__label" for="product_filter_form_brands_2">
								Philips
								<span class="js-product-filter-count" data-form-id="product_filter_form_brands_2">(1)</span>
							</label>
						</div>
						<div class="form-choice">
							<input type="checkbox" id="product_filter_form_brands_3" name="product_filter_form[brands][]" class="css-checkbox" value="5">
							<label class="css-checkbox__image form-choice__label" for="product_filter_form_brands_3">
								Sencor
								<span class="js-product-filter-count" data-form-id="product_filter_form_brands_3">(1)</span>
							</label>
						</div>
					</div>
				</div>

				<div class="box-filter__parameters">
					<div id="product_filter_form_parameters">
						<div class="box-filter__choice js-product-filter-parameter js-product-filter-box" data-product-filter-box-id="product_filter_form_parameters_7">
							<span class="box-filter__choice__title active js-product-filter-box-label js-product-filter-parameter-label">
								Ergonomics
								<i class="svg svg-arrow cursor-pointer js-product-filter-box-arrow"></i>
							</span>
							<div id="product_filter_form_parameters_7" class="box-filter__choice__inputs">
								<div class="form-choice js-product-filter-parameter-value">
									<input type="checkbox" id="product_filter_form_parameters_7_15" name="product_filter_form[parameters][7][]" class="css-checkbox" value="15">
									<label class="css-checkbox__image form-choice__label" for="product_filter_form_parameters_7_15">
										Right-handed
										<span class="js-product-filter-count" data-form-id="product_filter_form_parameters_7_15">(1)</span>
									</label>
								</div>
							</div>
						</div>
						<div class="box-filter__choice js-product-filter-parameter js-product-filter-box" data-product-filter-box-id="product_filter_form_parameters_6">
							<span class="box-filter__choice__title active js-product-filter-box-label js-product-filter-parameter-label">
								Gaming mouse
								<i class="svg svg-arrow cursor-pointer js-product-filter-box-arrow"></i>
							</span>
							<div id="product_filter_form_parameters_6" class="box-filter__choice__inputs">
								<div class="form-choice js-product-filter-parameter-value">
									<input type="checkbox" id="product_filter_form_parameters_6_7" name="product_filter_form[parameters][6][]" class="css-checkbox" value="7">
									<label class="css-checkbox__image form-choice__label" for="product_filter_form_parameters_6_7">
										Yes
										<span class="js-product-filter-count" data-form-id="product_filter_form_parameters_6_7">(1)</span>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="box-filter__action">
					<a class="btn js-product-filter-reset-button" href="http://master.heimdall.netdevelo:7980/electronics/">Clear filter</a>
					<button type="submit" id="product_filter_form_search" name="product_filter_form[search]" class="js-product-filter-show-result-button btn--primary btn">View results</button>
				</div>
			</form>
		</div>
	</div>
</template>