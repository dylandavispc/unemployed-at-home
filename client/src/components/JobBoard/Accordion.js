import React, { useState } from 'react';
import './style.css';

export default function Accordion() {
    return (
			<div class="panel-group" id="accordion">

				{/* Job Sites Card */}
				<div class="panel panel-default">
						<div class="panel-heading">
							<h4 class="panel-title">
								<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><span class="glyphicon glyphicon-lock">
								</span>Job Sites</a>
							</h4>
						</div>
						<div id="collapseOne" class="panel-collapse collapse">
							<div class="panel-body">
								<table class="table">
									<tr>
										<td>
											<a href="http://www.jquery2dotnet.com">Indeed</a>
										</td>
									</tr>
									<tr>
										<td>
											<a href="http://www.jquery2dotnet.com">Dice</a>
										</td>
									</tr>
									<tr>
										<td>
											<a href="http://www.jquery2dotnet.com">LinkedIn</a>
										</td>
									</tr>
								</table>
							</div>
						</div>
				</div>

				{/* Applied Already Card */}
					<div class="panel panel-default">
						<div class="panel-heading">
							<h4 class="panel-title">
								<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><span class="glyphicon glyphicon-ok">
								</span>Applied Already</a>
							</h4>
						</div>
						<div id="collapseTwo" class="panel-collapse collapse">
							<div class="panel-body">
								<table class="table">
									<tr>
										<td>
											<a href="http://www.jquery2dotnet.com">Indeed</a> <span class="label label-success">$ 320</span>
										</td>
									</tr>
									<tr>
										<td>
											<a href="http://www.jquery2dotnet.com">Dice</a>
										</td>
									</tr>
									<tr>
										<td>
											<a href="http://www.jquery2dotnet.com">LinkedIn</a>
										</td>
									</tr>
								</table>
							</div>
						</div>
				</div>

				{/* Search Terms Card */}
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree"><span class="glyphicon glyphicon-search">
							</span>Search Terms</a>
						</h4>
					</div>
						<div id="collapseThree" class="panel-collapse collapse">
							<div class="panel-body">
								<table class="table">
									<tr>
										<td>
												<a href="http://www.jquery2dotnet.com">Change Password</a>
										</td>
									</tr>
									<tr>
										<td>
												<a href="http://www.jquery2dotnet.com">Change Password</a>
										</td>
									</tr>
									<tr>
										<td>
												<a href="http://www.jquery2dotnet.com">Change Password</a>
										</td>
									</tr>
									<tr>
										<td>
												<a href="http://www.jquery2dotnet.com">Change Password</a>
										</td>
									</tr>
								</table>
							</div>
						</div>
				</div>
			</div>
    )
}